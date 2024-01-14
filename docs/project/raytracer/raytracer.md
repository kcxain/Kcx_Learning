# 动手写光线追踪器

本文内容参考教程 [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html)：教你在两天时间用 C++ 从 0 开始实现一个光线追踪器。因为我对图形学很感兴趣，而又一直没有时间去系统学习，恰巧最近入门 Rust，需要项目练手，所以决定动手用 Rust 实现这个项目，一举两得。

## 1. 输出图片

简单起见，我们使用 PPM 格式来输出和保存图片，它的格式如下：

![](./assets/fig-1.01-ppm.jpg)

可以随便写个程序输出一张这样的图片：

```rust
fn main() {
    let image_width = 256;
    let image_height = 256;

    // Render
    println!("P3\n{} {}\n255", image_width, image_height);

    for j in (0..image_height).rev() {
        for i in 0..image_width {
            let r = (i as f64) / ((image_width - 1) as f64);
            let g = (j as f64) / ((image_height - 1) as f64);
            let b = 0.25;

            let ir = (255.999 * r) as i32;
            let ig = (255.999 * g) as i32;
            let ib = (255.999 * b) as i32;

            println!("{} {} {}", ir, ig, ib);
        }
    }
}
```

这个程序生成图片的像素 R 值和 G 值从左往右，从上往下依次增大，将其输出保存到`image.ppm`中，然后用网站 [WebPPM — PPM viewer](https://0xc0de.fr/webppm/) 查看，效果如图：

![](./assets/image.png)
