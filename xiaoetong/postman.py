import requests

url = "https://apppit6dcs05916.pc.xiaoe-tech.com/api/xe.goods.relation.get/1.0.0?app_id=appPit6DCs05916"

payload = "{\"page_size\":20,\"goods_id\":\"p_5d9eb71212cbe_Ckzdcjsp\",\"last_id\":\"\",\"goods_type\":6,\"resource_type\":[1,2,3,4,20],\"order_type\":0}"
headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Cookie': 'pc_user_key=34e90808c5114d9602b0fe3ae3944a5b; XIAOEID=204e6816673992ba170306bb871d5d41; cookie_channel=internaljump; channel=homepage; cookie_session_id=mMJlj0hJvXNcsYmUX8aR9NLJ1P2JR6ld'
}

response = requests.request("POST", url, headers=headers, data = payload)

print(response.text.encode('utf8'))
