<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header">
          <h1 class="project-title" v-html="$page.contentList.title" />
          <div class="project-info">

            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span 
                  class="category"
                  v-for="(category, index) in $page.contentList.categories" 
                  :key="index"
                  v-text="category"
                />
              </div>
            </div>

            <div class="year-container">
              <span class="label">Year</span>
              <div v-html="mdToHtml($page.contentList.date)"/>
            </div>
          </div>
        </div>

        <div v-html="$page.contentList.content" class="content" />

      </div>

    </div>
  </Layout>
</template>



<script>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt()

export default {
    name:'ProjectPost',
    methods:{
        mdToHtml(markdown){
            return md.render(markdown)
        }
    }
}
</script>

<page-query>
query($id: ID!) {
	contentList: strapiContentList(id:$id){
        id
        title
        date
        author
        excerpt
        thumbnail{
          url
        }
        content
        
      }
    }
</page-query>

<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
