//= require 'swagger_engine/lib/jquery-1.8.0.min.js'
//= require 'swagger_engine/lib/jquery.slideto.min.js'
//= require 'swagger_engine/lib/jquery.wiggle.min.js'
//= require 'swagger_engine/lib/jquery.ba-bbq.min.js'
//= require 'swagger_engine/lib/handlebars-2.0.0.js'
//= require 'swagger_engine/lib/underscore-min.js'
//= require 'swagger_engine/lib/backbone-min.js'
//= require 'swagger_engine/swagger-ui.js'
//= require 'swagger_engine/lib/highlight.7.3.pack.js'
//= require 'swagger_engine/lib/marked.js'
//= require 'swagger_engine/lib/swagger-oauth.js'

$(function() {
  $('#input_apiKey').change(function() {
    var key = $('#input_apiKey')[0].value;
    if (key && key.trim() != "") {
      key = "Token token=" + key;
      swaggerUi.api.clientAuthorizations.add("key", new SwaggerClient.ApiKeyAuthorization("Authorization", key, "header"));
    }
  });
});
