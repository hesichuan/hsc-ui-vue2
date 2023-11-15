<template>
  <div id="app">
    <Demo />
    <br />
    <hsc-descriptions title="用户信息" width="500" :column="3" border>
      <template slot="extra">
        <div class="button">操作</div>
      </template>
      <hsc-descriptions-item label="用户名">张三</hsc-descriptions-item>
      <hsc-descriptions-item label="年龄">18</hsc-descriptions-item>
      <hsc-descriptions-item label="性别">男</hsc-descriptions-item>
      <hsc-descriptions-item label="地址">北京市海淀区</hsc-descriptions-item>
    </hsc-descriptions>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
#app {
  padding: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .button {
    background-color: #409eff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
