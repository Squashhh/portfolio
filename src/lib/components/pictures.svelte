<head>
  <style>
    .model-selector {
      display: flex;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }
    .model-selector::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: #1C1C1C;
    }

    .model-selector::-webkit-scrollbar-thumb {
      background-color: #555555;
      border-radius: 5px;
    }

    .model-selector::-webkit-scrollbar-track {
      background-color: #1C1C1C;
    }

    .model-selector img {
      margin-right: 16px;
      margin-bottom: 16px;
    }

    .model-selector {
      display: flex;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      padding-top: 16px;
    }
  </style>
</head>

<section id= "exposure">
<body>
  <iframe id="model" width="330" height="180"></iframe>
  <div class="model-selector"></div>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script>
    axios.get("https://sketchfab.com/v3/search?type=models&user=Squashhh").then(response => {
      let models = [];
      response.data.results.forEach(result => {
        models.push({name: result.name, embed: result.embedUrl, image: result.thumbnails.images[1].url}); 
      });
      setModelSelectorImage(models);
      setCurrentModel(models[0].embed);
    });

    function setModelSelectorImage(models){
      let container = document.querySelector(".model-selector");
      models.forEach(model => {
        let image = document.createElement("img");
        image.alt = model.name;
        image.src = model.image;
        image.height = 144 / 2.5;
        image.width = 256 / 2.5;
        image.style.cursor = "pointer";
        image.onclick = () => {
          setCurrentModel(model.embed);
        }
        container.appendChild(image);
      });
    }

    function setCurrentModel(embedLink){
      let iframe = document.getElementById("model");
      iframe.src = embedLink;
      iframe.style.display = "block";
      iframe.style.margin = "auto";
    }
  </script>
</body>
</section>
