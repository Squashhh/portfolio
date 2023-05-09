<ul class="people-list">

  <li id="cookiesbaba">
    <div style="display: flex; align-items: center;">
      <img src="/cookiesbaba.png" alt="cookiesbaba" id="people">
      <h1 style="margin-right: 20px;">cookies/baba</h1>
    </div>
    <h2>18/04/2023</h2>
    <img src="/five.png" alt="cookiesbaba Notice" id="notice">
    <h3>Écoute tous les demandes, fait le travail parfaitement.</h3>
  </li>

  <li id="Yanis">
    <div style="display: flex; align-items: center;">
      <img src="/Yanis.png" alt="Yanis" id="people">
      <h1 style="margin-right: 20px;">Yanis</h1>
    </div>
    <h2>18/04/2023</h2>
    <img src="/five.png" alt="Yanis Notice" id="notice">
    <h3>Une attente de la part de squash du fait de mon inactivité. Le travail de toutes beautés, un traitement d'images dignes d'un professionnalisme expérimenté. En attente de ma prochaine commande.</h3>
  </li>

  <li id="Wyze">
    <div style="display: flex; align-items: center;">
      <img src="/Wyze.png" alt="Wyze" id="people">
      <h1 style="margin-right: 20px;">Wyze</h1>
    </div>
    <h2>23/04/2023</h2>
    <img src="/five.png" alt="Wyze Notice" id="notice">
    <h3>Je suis plus que satisfait de ma commande, le produit est exactement ce que je recherchais. Je n'hésiterai pas à revenir pour mes futurs achats.</h3>
  </li>

</ul>

<style>
  .people-list {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 400px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #555555 #1C1C1C;
  }

  .people-list::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #1C1C1C;
  }

  .people-list::-webkit-scrollbar-thumb {
    background-color: #555555;
    border-radius: 5px;
  }

  .people-list::-webkit-scrollbar-track {
    background-color: #1C1C1C;
  }

  #cookiesbaba, #Yanis, #Wyze {
    display: inline-block;
    margin: 0 50px;
    width: 600px;
  }

  #people {
    height: 30px; 
    width: 30px; 
    border-radius: 30px; 
    margin-right: 10px;
  }

  h1 {
    font-family: "Inter", sans-serif;
    color: #FFFFFF;
    font-size: 20px;
    margin: 0px;
  }

  h2 {
    font-family: "Inter", sans-serif;
    color: #ffffff6c;
    font-size: 12px;
  }

  h3 {
    font-family: "Inter", sans-serif;
    color: #ffffff80;
    font-size: 20px;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
  }

</style>
