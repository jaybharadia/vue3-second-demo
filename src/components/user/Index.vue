<template>
  <div>
    <h2>User Component</h2>
    <h4>User ID -> {{ id }}</h4>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat
      laborum quisquam! In beatae sunt sit! Commodi voluptas adipisci nulla
      maxime aut doloremque possimus ipsam. Accusantium ullam veniam eos minus
      eaque autem optio tempore hic eligendi mollitia saepe, voluptatem
      consequatur perferendis consectetur doloremque laudantium molestias
      cupiditate odit harum eius commodi.
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style scoped></style>
