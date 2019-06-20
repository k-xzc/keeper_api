Refer to : https://github.com/kantsuw/BXtoES

I break the monolith service into 3 micro services
  - selector_api : API that user can config the currency that they want to store data  and call to crypto_currency_api 
  
  - crypto_currency_api : API that call to exchange to get currency rate and call to keeper_api
  
  - keeper_api : API that transform currency rate from crypto_currency_api and send to elasticsearch

# keeper_api

  API that transform currency rate from crypto_currency_api and send to elasticsearch

# Prerequisite

- docker

- nodejs version > 8

# How to run 
  
  Checkout code from GitHub
  
  export keeper_api_port=.....
  
  export es_host=.....
  
  export es_port=.....
  
  export es_index=.....
  
  export es_type=.....

  npm install
  
  node app.js/index.js

# Running with docker 

docker run -d -e keeper_api_port=5678 -e es_host=kantz.space \

-e es_host=9200 -e es_index=bx_x_x -e es_type=currency xezor/keeper_api

