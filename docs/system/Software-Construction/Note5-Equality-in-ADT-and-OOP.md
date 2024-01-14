---
id: note5
---



# Note5-Equality in ADT and OOP

在现实物理世界中，任何对象都是不相等的

但是对于人类语言，或者对于数学世界，完全可以有很多相同的东西，例如√9 和 3 表现了相等的数值，我们完全可以认为两者是相同的

那么在软件世界中，Java 的`==`和`equals()`有什么区别？

在很多场景下，需要判定两个对象是否 “相等”，例如：判断某个`Collection`中是否包含某个特定元素，这时该依据什么来判定？

如何为自定义的 ADT 正确实现`equals()`？

本文就是要解决上述问题

## 什么是相等？

先说明**等价关系**，它指对于关系 E ⊆ T x T ，满足：

- 自反性: E(t,t) ∀ t ∈ T
- 对称性: E(t,u) ⇒ E(u,t)
- 传递性: E(t,u) ∧ E(u,v) ⇒ E(t,v)

严格来说，我们可以从三个角度定义相等：

- 利用等价关系，我们说 a 与 b 相等，当且仅当 E(a,b)

- 利用抽象函数，AF: R → A ，它将具体的表示数据映射到了抽象值，那么当且仅当 AF(a)=AF(b)时，我们说 a 与 b 相等
- 站在外部观察者角度：对两个对象调用任何相同的操作，都会得到相同的结果，则认为这两个对象相等

### 举例：`Duration`

这里有一个不可变ADT的例子：

```java
public class Duration {
    private final int mins;
    private final int secs;
    // Rep invariant:
    //    mins >= 0, secs >= 0
    // Abstraction function:
    //    AF(min, secs) = the span of time of mins minutes and secs seconds

    /** Make a duration lasting for m minutes and s seconds. */
    public Duration(int m, int s) {
        mins = m; secs = s;
    }
    /** @return length of this duration in seconds */
    public long getLength() {
        return mins*60 + secs;
    }
}
```

那么对于下面的 4 个对象：

```java
Duration d1 = new Duration (1, 2);
Duration d2 = new Duration (1, 3);
Duration d3 = new Duration (0, 62);
Duration d4 = new Duration (1, 2);
```

- 从抽象函数的角度来看，表示域为 {mins, secs}，而抽象域为两者计算的时间{mins×60 + secs}，`d1`,`d3`,`d4`算出来的时间相等，即映射到了相同的抽象域，我们可以认为这 3 个对象相等

- 站在外部观察者角度，这个类唯一的观察器是`getLength()`，`d1`,`d3`,`d4`调用返回的结果总是相等的，所以也可以认为这 3 个对象相等

## `==` vs. `equals()`

和很多其他语言一样，Java有两种判断相等的操作—— `==` 和 `equals()` 。

- `==`比较的是引用。它比较的是**引用等价性**(referential equality)。如果两个引用指向同一块存储区域，那它们就是`==`的，例如我们之前提到过的快照图，`==`就意味着它们的箭头指向同一个对象
- `equals()`操作比较的是对象的内容，它比较的是**对象等价性**(object equality)

作为对比，这里列出来了几个语言中的相等操作：

|             | *referential equality* | *object equality* |
| ----------- | ---------------------- | ----------------- |
| Java        | `==`                   | `equals()`        |
| Objective C | `==`                   | `isEqual:`        |
| C#          | `==`                   | `Equals()`        |
| Python      | `is`                   | `==`              |
| Javascript  | `==`                   | n/a               |

注意到`==`在 Java 和 Python 中的意义正好相反，别被这个弄混了

那么两者该怎么使用呢？

- 对于基本数据类型，使用`==`判定相等
- 对于对象数据类型，应总是使用`equals()`判断相等，因为如果判断逻辑是内存地址相等，则不需要重写`Object.equals()`，此时`equals()`与`==`是等价的，如果有特定的判断逻辑，则需要根据逻辑重写`Object.equals`

## 重写`equals()`

`equals()` 是在 `Object` 中定义的，它的默认实现方式如下：

```java
public class Object {
    ...
    public boolean equals(Object that) {
        return this == that;
    }
}
```

可以看到， `equals()` 在`Object`中的实现方法就是引用相等，对于不可变类型的对象来说，这几乎总是错的，所以需要根据需求重写`equals()`

例如，我们可以重写前面`Duration`中的`equals()`方法：

```java
@Override
public boolean equals(Object that) {
    return that instanceof Duration && this.sameValue((Duration)that);
}

// returns true iff this and that represent the same abstract value
private boolean sameValue(Duration that) {
    return this.getLength() == that.getLength();
}
```

它首先判断了传入的`that`是 `Duration`，然后调用`sameValue()` 去判断它们的值是否相等。表达式 `(Duration)that` 是一个类型转换操作，它告诉编译器 `that`指向的是一个 `Duration`对象

注意这里用到了`instanceof`

它用于判断对象是不是某个特定类型（或其子类型）

## 对象契约(Object contract)

由于`Object`的规约实在太重要了，我们有时也称它为**对象契约**(the Object Contract)

当重写`equals()`时，需要遵守这些规定：

- `equals()` 必须定义一个等价关系，即一个满足自反、对称和传递关系
- `equals()` 必须是确定的，即连续重复的进行相等操作，结果应该相同
- 对于不是`null`的引用`x`， `x.equals(null)` 应该返回`false`
- 如果两个对象使用 `equals` 操作后结果为真，那么它们各自的`hashCode` 操作的结果也应该相同

### 破坏等价关系

我们必须保证`equals()`构建出一个满足自反性、对称性、传递性的等价关系

如果没有满足，那么与相等相关的操作（例如集合、搜索）将变得不可预测

例如，我们肯定不希望`a`等于`b`但是后来发现`b`不等于`a`，这都是非常隐秘的 bug

比如假设我们希望在判断 `Duration` 相等的时候允许一些误差，因为不同的电脑同步的时间可能会有不同：

```java
@Override
public boolean equals(Object that) {
    return that instanceof Duration && this.sameValue((Duration)that);
}

private static final int CLOCK_SKEW = 5; // seconds

// returns true iff this and that represent the same abstract value within a clock-skew tolerance
private boolean sameValue(Duration that) {
    return Math.abs(this.getLength() - that.getLength()) <= CLOCK_SKEW;
}
```

创建如下对象：

```java
Duration d_0_60 = new Duration(0, 60);
Duration d_1_00 = new Duration(1, 0);
Duration d_0_57 = new Duration(0, 57);
Duration d_1_03 = new Duration(1, 3);
```

很显然，`d_0_57.equals(d_1_03)`的返回值为`false`，违反了传递性

### 破坏哈希表(Hash Tables)

一个哈希表表示的是一种映射：从**键值**映射到**值**的抽象数据类型。哈希表提供了常数级别的查找，所以它的性能非常棒

哈希表是怎么工作的呢？

它包含了一个初始化的数组，其大小是我们设计好的。当一个键值对准备插入时，我们计算这个键的`hashcode`，产生一个索引，它在我们数组大小的范围内（例如使用取模运算），然后将值插入到数组索引对应的位置

哈希表的一个**基本不变量**(RI)就是键的位置必须由`hashcode`确定

Hashcodes 最好被设计为键计算后的索引平滑、均匀的分布在所有范围内

但是偶尔也会发生冲突，例如两个键计算出了同样的索引，因此哈希表通常存储的是一个键值对的列表而非一个单个的值，这通常被称为**哈希桶**(hash bucket)

而在 Java 中，键值对就是一个有着两个域的对象。当插入时，在计算出的索引位置插入一个键值对，当查找时，先根据键哈希出对应的索引，然后在索引对应的位置找到键值对列表，最后在这个列表中查找你的键，如图：

![](./assets/v2-11c11c59371e7e0a233ebaa567214f03_720w.webp)

这就是为什么`Object`的规约要求相等的对象必须有同样的 hashcode，如果两个相等的对象 hashcode 不同，那么它们存储的时候位置也就不一样——如果你存入了一个对象，然后查找一个相等的对象，就可能在错误的索引处进行查找，也就会得到错误的结果

## 重写`hashCode()`

`Object.hashCode`默认返回的是对象的地址，如果我们重写了`equals()`方法，那么我们就违反了**对象契约**，所以也应该同步重写`hashCode()`方法

- 最简单的重写`hashCode()`方法就是让所有的对象的 hashcode 为同一常量，但是由上面哈希表实现原理讲到的，这样会大大降低哈希表的效率

- 一个比较通用的办法是通过`equals()`中用到的所有信息的 hashcode 组合出新的 hashcode

例如前面的`Duration`可以这样写：

```java
@Override
public int hashCode() {
    return (int) getLength();
}
```

只要满足了相等的对象产生相同的 hashcode，无论这个 hashcode 是如何实现的，代码就总会是正确的

## 举例：`phoneNumber`

一个电话号码类的`hashCode()`方法，它可以这样写：

```java
public final class PhoneNumber {
	private final short areaCode;
	private final short prefix;
	private final short lineNumber;
    
	@Override
	public int hashCode() {
		int result = 17; // Nonzero is good
		result = 31 * result + areaCode; // Constant must be odd
		result = 31 * result + prefix; // " " " "
		result = 31 * result + lineNumber; // " " " "
		return result;
	}
	...
}
```

也有更聪明的写法：

```java
public final class PhoneNumber {
	private final short areaCode;
	private final short prefix;
	private final short lineNumber;
	@Override
	public int hashCode() {
		short[] hashArray = {areaCode, prefix, lineNumber};
		return Arrays.hashCode(hashArray);
	}
	...
}
```

## 可变(mutable)类型的相等

前面讨论的都是不可变类型，那么可变类型对象会是怎样呢？

回忆之前我们对于相等的定义，即它们不能被使用者观察出来不同。而对于可变对象来说，它们多了一种新的可能：通过在观察前调用**变值器**，我们可以改变其内部的状态，从而观察出不同的结果

所以重新定义两种相等：

- **观察等价性：**两个对象在不改变各自状态的前提下不能被区分。例如，只调用观察器、生产器、构造器时
- **行为等价性：**调用对象的任何方法都展现一致的结果

对于可变类型来说，往往更倾向于实现严格的**观察等价性**，例如 Java 中的两个`List`包含相同顺序的元素，则`equals()`返回`true`

### 观察等价性的缺陷

但是，观察等价性可能会带来隐秘的 bug，甚至破坏表示不变量(RI)，比如我们现在有一个 `List`，然后我们将其存入一个 `Set`：

```java
List<String> list = new ArrayList<>();
list.add("a");

Set<List<String>> set = new HashSet<List<String>>();
set.add(list);
```

![](./assets/v2-56f0d2dd0a10a4f5d69879ed6f6c281c_720w.webp)

我们可以检查这个集合是否包含我们存入的列表：

```java
set.contains(list) → true
```

但是如果我们修改这个列表：

```java
list.add("goodbye");
```

![](./assets/v2-98df6d0e45c4a9b5bac31989ca3d740b_720w.webp)

它似乎就不在集合中了！

```java
set.contains(list) → false
```

更糟糕的是：当我们用迭代器遍历这个集合时，我们会发现集合存在，但是`contains()` 说它不存在！

```java
for (List<String> l : set) { 
    set.contains(l) → false! 
}
```

如果一个集合的迭代器和`contains()`都互相冲突，显然这个集合已经被破坏了

### 原因分析

我们知道 `List<String>` 是一个可变对象，而在 Java 对可变对象的实现中，操作通常都会影响 `equals()` 和 `hashCode()`的结果，所以列表第一次放入 `HashSet`的时候，它是存储在这时 `hashCode()` 对应的索引位置

后来列表发生了改变，计算 `hashCode()` 会得到不一样的结果，但是 `HashSet` 并没有更新其在哈希桶中的位置，所以我们调用`contains`时候使用的新的`hashcode`来查找，当然就找不到了

当 `equals()` 和 `hashCode()` 的结果可能被可变影响是，哈希表的表示不变性就会遭到破坏

从这个例子我们可以看到，对于可变类型最好使用行为等价性，也就是说指向同样内存空间的对象才相等，但是 Java 并没有采用这种设计

## 自动装箱(Autoboxing)

我们之前提到过 Java 的原始类型和它对应的包装类型，例如`int`和`Integer`，包装类型的`equals()`比较的是值相等：

```java
Integer x = new Integer(3);
Integer y = new Integer(3);
x.equals(y) → true
```

但是这里会有一个隐秘的问题，

`==` 被重载了，对于 `Integer`这样的类型， `==` 判断的是引用相等：

```java
x == y // returns false
```

对于基本类型`int`，`==`判断的是行为相等：

```java
(int)x == (int)y // returns true
```

所以，并不能随意将`Integer`和`int`互换

Java 会自动对`int`和`Integer`进行转换（自动装箱），这也会导致 bug，思考下面的代码：

```java
Map<String, Integer> a = new HashMap(), b = new HashMap();
a.put("c", 130); // put ints into the map
b.put("c", 130);
a.get("c") == b.get("c") → false
```

放入`Map`时，会自动将`int 130`转为`Integer`

而取出来的时候又是`Integer`类型，而对`Integer`类型的`==`时引用相等的判断，所以用`==`比较会返回`false`

由于 Java 的常量池，又会导致以下结果：

![](./assets/v2-1fcb87e42bccc7a1298dd26e7e7d72e3_720w.webp)

## 总结

本文详细阐述了 ADT 中“相等”这个概念，应该注意以下要求：

- `equals()`应该满足等价关系（自反、对称、传递）
- `equals()`必须和哈希值保持一致，以便让使用哈希表的数据结构正常工作
- **抽象函数**是**不可变类型**相等的比较基础
- **引用等价性**是可变类型的比较基础

最后，还是用以下三点结束本文：

- Safe from bugs. 正确地实现`equals()`和`hashCode()`对于`collection`类型用很重要（例如集合和映射），实现不可变类型时一定要重写这两个方法
- Easy to understand. 使用者在阅读规约后会期望我们的 ADT 实现合理的相等操作
- Ready for change. 为不可变类型实现的相等操作会把**引用相等**和**抽象值相等**分离，帮助避开隐秘的 bug
