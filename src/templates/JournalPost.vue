<template>
<Layout>
    <div class="journal">
      <div class="container journal-container">

        <div class="journal-header">
          <h1 v-html="$page.list.title" class="journal-title" />
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.list.author" />
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div v-text="$page.list.date"/>
            </div>
            <div class="journal-time" v-if="!$page.list.thumbnail">
              <span class="label">Time</span>
              <span>{{ $page.list.timeToRead }} min read</span>
            </div>
            <div class="journal-time" v-else>
              <span class="label">Time</span>
              <span><img :src="baseUrl+ $page.list.thumbnail.url" alt=""> min read</span>
            </div>
          </div>          
        </div>

        <JournalContent :content="$page.list.content" />

      </div>
    </div>

</Layout>
</template>



<script>
import JournalContent from "@/components/JournalContent"

export default {
  components: {
    JournalContent
  },
  data(){
    return {
      baseUrl : "http://106.75.189.119:1337"
    }
  }
  // metaInfo () {
  //   return {
  //     title: this.$page.post.title
  //   }
  // }
}
</script>

<page-query>
query($id: ID!) {
	list: strapiList(id:$id){
        id
        title
        content
        date
        categories{
          _0
          _1
        }
        bg_color
        fg_color
        thumbnail{
          url
        }
      }
    }
</page-query>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
