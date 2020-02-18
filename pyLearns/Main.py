import pymysql
import requests


def algorithm(x, y):
    if y == 1 or y == 0:
        return x
    else:
        return x * algorithm(x, y-1)


conn = pymysql.connect(host='127.0.0.1', port=1672, user='root',
                       passwd='ciel', db='pay', charset="utf8")
cur = conn.cursor()
cur.execute("USE pay")

cur.execute("SELECT * FROM user")

for i in cur.fetchall():
    print(i)

cur.close()
conn.close()


r = requests.get('https://zhuanlan.zhihu.com/p/66281022')

print(r.status_code)
print(r.headers['content-type'])

print(r.text)

# print(r.json())