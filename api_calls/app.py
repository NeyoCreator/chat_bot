
import requests

url = "https://google-search72.p.rapidapi.com/search"

querystring = {"query":"word cup","gl":"us","lr":"en","num":"20","start":"0","sort":"relevance"}

headers = {
	"X-RapidAPI-Key": "2c900475e6msh323d593c0c473f4p1bf21cjsnf8d9d965070d",
	"X-RapidAPI-Host": "google-search72.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)
