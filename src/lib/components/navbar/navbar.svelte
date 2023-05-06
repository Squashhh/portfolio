<script>
  import '$lib/styles/font.css'
  import Icon from '/Icon.png';
</script>

<nav style="display: flex; align-items: center">
  <img src={Icon} alt="Icon">
  <h1>SKETCHFAB</h1>
  <h1>EXPOSURE</h1>
  <h1>CONTACT</h1>
</nav>
  
<style>

  img {
    justify-content: left;
    margin-left: 32px;
    margin-right: 32px;
  }
  
  h1 {
    text-align: right;
    font-size: 20px;
    font-family: "Inter";
    color: #FFFFFF;
    margin-right: 30px;
    margin-left: 30px;
    cursor: pointer;
  }


  h1:hover {
    color: #a19e9e;
  }
  
  nav {
    background: #181818;
    height: 125px;
  }

</style>