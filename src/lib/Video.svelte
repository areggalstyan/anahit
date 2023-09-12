<script>
  export let src;
</script>

<iframe
  width="560"
  height="315"
  {src}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write;
                            encrypted-media; gyroscope; picture-in-picture"
  class="border-secondary border-4 rounded max-w-full flex-shrink-0"
  allowFullScreen
  srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}body,html{height:100%}img{height:100%;object-fit:cover}img,span{width:100%;position:absolute;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#fff;text-shadow:0 0 .5em #000}</style><a href="${src}?autoplay=1"><img src="https://img.youtube.com/vi/${src != null ? src.split('/')[4] : null}/hqdefault.jpg" alt=""><span>▶</span></a>`}
/>
