import React from 'react';
import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        // 以下部分参考 Giscus 生成的代码填写
        repo="kcxain/Kcx_Learning" 
        repoId="R_kgDOJBET7w" 
        category="Announcements"
        categoryId="DIC_kwDOJBET784CV08e"
        mapping="og:title"
        strict="1"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="zh-CN"
      />
    </div>
  );
};

export default Comment;