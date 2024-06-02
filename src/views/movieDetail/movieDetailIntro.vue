<script setup>
const info1 = '介绍'
const info2 = '评论'
</script>
<template>
  <div class="movieDetailIntro">
    <navText :info="info1"></navText>
    <div class="text">
      看观众严选喜剧，快乐逗趣包您满意，笑过之后更想好好活！
      注意看，眼前这个男人叫贾有为(贾冰
      饰)，“省钱门”当之无愧代言人，抠门赛道遥遥领先的天之骄子!他抠搜半生不敢玩命花钱，没成想正值壮年罹患绝症是没命花钱!眼看生命只剩十天，百万存款秒变过眼云烟，贾有为浮想联翩，决定带着拜把子老铁沙白虎(小沈阳
      饰)、许大力 (于洋 饰)和董建峰 (董宝石
      饰)尽情挥霍，不辜负人间!万万没想到体验新人生处处是惊喜，不光友情续费了，快乐到位了，就连贾有为的昔日女神王晓倩(谭卓
      饰)也意外再会了.…
    </div>
    <div class="commit">
      <navText :info="info2"></navText>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movieDetailIntro {
  // background-color: aquamarine;
  .text {
    height: 160px;
    padding-left: 15px;
    padding-top: 16px;
    letter-spacing: 3px;
    font-size: 15px;
    // background-color: aquamarine;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 6;
    text-overflow: ellipsis;
    &::first-letter {
      color: rgb(216, 127, 243);
      font-size: 40px;
    }
  }
}
</style>
