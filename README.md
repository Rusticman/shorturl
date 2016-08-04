##Shortern URL Microservice

#Heroku app

https://shorturl-rustic.herokuapp.com/


#User stories

* I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
* When I visit that shortened URL, it will redirect me to my original link.


#Example creation usage:

```
https://shorturl-rustic.herokuapp.com/new/https://www.ebay.co.uk
https://shorturl-rustic.herokuapp.com/new/http://www.digg.com
```

#Example creation output:

```
{ "original_url":"https://www.digg.com", "short_url":"https://shorturl-rustic.herokuapp.com/5" }
{ "original_url":"https://www.ebay.co.uk", "short_url":"https://shorturl-rustic.herokuapp.com/6" }
```

#Usage:

```
https://shorturl-rustic.herokuapp.com/5
```

#Will redirect to:

```
https://www.digg.com
```
