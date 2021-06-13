<template>
  <Layout>
    <div class="container">
      <Hero :settings="$page.settings.edges[0].node" />
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>

query{
  projects: allStrapiList{
    edges{
      node{
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
  },

  journals: allStrapiContentList{
    edges{
      node{
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
  },

  settings: allStrapiGeneral{
    edges{
      node{
        hero_title
        footer
        site_name
        site_description
        hero_subtitle
      }
    }
  }
}

</page-query>


<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>
