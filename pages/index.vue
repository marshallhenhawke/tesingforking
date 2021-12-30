<template>
  <section>
    <div>
      <Logo :width="350"/>
      <h1 class="title">
        NUXT
        <span class="green">JS</span>
      </h1>
      <h2 class="subtitle">Starter for CodeSandBox</h2>
      <div class="text">
        <p>Bacon ipsum dolor amet short ribs fatback ham shank chislic boudin jowl turkey kevin. Jowl ribeye bacon buffalo pastrami pork chop brisket leberkas turducken frankfurter pig pork loin short loin. Cupim brisket jerky, beef ribs biltong short ribs shoulder leberkas pig shank landjaeger prosciutto strip steak rump ham. Chicken swine t-bone ground round leberkas. Corned beef short loin tongue t-bone doner chicken, porchetta bresaola ball tip jowl boudin pork chop meatball rump chislic. Ham hock ball tip filet mignon meatloaf, pork belly picanha shoulder turducken burgdoggen chuck leberkas rump. Beef ribs pork loin strip steak, shoulder burgdoggen ham hock short loin pig pancetta.</p>
        <p>Swine shankle beef, tongue corned beef boudin alcatra. Picanha drumstick meatloaf filet mignon, shoulder corned beef shankle sausage strip steak hamburger turkey fatback tri-tip spare ribs shank. Swine bresaola rump pancetta capicola pork belly leberkas prosciutto short loin shoulder filet mignon jerky kevin chicken shankle. Beef ribs tail t-bone kielbasa biltong frankfurter doner. Venison brisket sausage, biltong sirloin andouille frankfurter pork flank. Corned beef chicken beef ribs jerky tri-tip.</p>
        <p>Spare ribs boudin kielbasa fatback pork chop, meatloaf jerky frankfurter shoulder bacon chislic t-bone cupim. Strip steak short ribs chislic, beef ribs picanha tenderloin rump swine ham meatball meatloaf andouille flank pancetta. Jerky sirloin swine ball tip strip steak. Alcatra swine beef ribeye. Bresaola short loin shankle bacon. Swine frankfurter chuck cow. Boudin venison strip steak filet mignon meatloaf rump pork belly sirloin pork chop jerky frankfurter beef fatback pork loin flank.</p>
        <p>Landjaeger hamburger prosciutto kevin flank short loin, pig beef ribeye rump spare ribs t-bone pork loin tri-tip porchetta. Ground round sausage boudin pancetta filet mignon. Landjaeger pork chop pork loin, meatball salami corned beef shank cow ham hock porchetta pastrami sirloin capicola alcatra. Cow venison salami biltong porchetta tri-tip ground round landjaeger. Turducken spare ribs picanha meatloaf bacon ball tip doner. Sausage pork belly frankfurter doner tenderloin drumstick tail tongue.</p>
        <p>Venison biltong jowl hamburger fatback turkey tri-tip bacon filet mignon jerky. Prosciutto turducken ham tri-tip kielbasa capicola frankfurter shankle landjaeger tongue ribeye. Strip steak ball tip bresaola pastrami shoulder cupim sausage turducken corned beef rump. Cupim alcatra swine fatback pig cow filet mignon chicken chislic shank short loin ham hock pork landjaeger picanha. Pork chop pork loin jerky short loin flank filet mignon ham. Chislic beef spare ribs pig filet mignon turkey, short ribs picanha shank salami venison shankle porchetta. Pancetta meatloaf doner shankle sirloin meatball prosciutto jowl.</p>
      </div>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation
          <IconLink/>
        </a>

        <NLink to="/about" class="button--grey">About</NLink>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";
import globalMixin from "~/mixins/global.js";

export default {
  components: {
    Logo,
    IconLink
  },

  mixins: [globalMixin]
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.text {
  max-width: 600px;
  margin: auto;
}

p {
  margin: 40px auto;
  text-align: left;
}
</style>
