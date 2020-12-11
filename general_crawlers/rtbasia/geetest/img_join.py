from PIL import Image
from PIL import ImageChops
import numpy
import requests
from io import BytesIO
import matplotlib.pyplot as plt

# 图片切割数组
img_list = [
    (157, 58),
    (145, 58),
    (265, 58),
    (277, 58),
    (181, 58),
    (169, 58),
    (241, 58),
    (253, 58),
    (109, 58),
    (97, 58),
    (289, 58),
    (301, 58),
    (85, 58),
    (73, 58),
    (25, 58),
    (37, 58),
    (13, 58),
    (1, 58),
    (121, 58),
    (133, 58),
    (61, 58),
    (49, 58),
    (217, 58),
    (229, 58),
    (205, 58),
    (193, 58),
    (145, 0),
    (157, 0),
    (277, 0),
    (265, 0),
    (169, 0),
    (181, 0),
    (253, 0),
    (241, 0),
    (97, 0),
    (109, 0),
    (301, 0),
    (289, 0),
    (73, 0),
    (85, 0),
    (37, 0),
    (25, 0),
    (1, 0),
    (13, 0),
    (133, 0),
    (121, 0),
    (49, 0),
    (61, 0),
    (229, 0),
    (217, 0),
    (193, 0),
    (205, 0),
]

# 重新拼合图片
def crop_52(img):
    X, Y = img.size
    newImg = Image.new(mode="RGB", size=(X, Y), color=(255, 255, 255))
    img_list2 = []
    img_list3 = []

    # 图片重新裁剪排序
    for i in img_list:
        if i[1] == 0:
            img_list2.append(img.crop((i[0], 0, i[0] + 10, int(Y / 2))))
        else:
            img_list3.append(img.crop((i[0], int(Y / 2), i[0] + 10, Y)))

    # 拼合图片
    x = 0
    for i in img_list2:
        newImg.paste(im=i, box=(x, int(Y/2)))
        x += i.size[0]

    x = 0
    for i in img_list3:
        newImg.paste(im=i, box=(x, 0))
        x += i.size[0]

    return newImg

def coord(img,thre=45):
    # newImg = Image.fromarray(numpy.array([[0 if j>thre else 255 for j in i]for i in numpy.array(img.convert("L")).tolist()]))
    # plt.imshow(newImg)
    # plt.show()
    for i in numpy.array(img.convert("L")).tolist()[10:-10]:
        for x,j in enumerate(i):
            if j > thre:
                return x+1



def parseImg(url1,url2):
    req1 = requests.get(url1)
    img1 = BytesIO(req1.content)
    img1 = crop_52(Image.open(img1))

    req2 = requests.get(url2)
    img2 = BytesIO(req2.content)
    img2 = crop_52(Image.open(img2))

    img3 = ImageChops.difference(img1,img2)
    return coord(img3)



if __name__ == '__main__':

    url="https://static.geetest.com/pictures/gt/e11621516/bg/9aa755f2b.jpg"
    url2="https://static.geetest.com/pictures/gt/e11621516/e11621516.jpg"


    req = requests.get(url)
    img1 = BytesIO(req.content)
    img1 = crop_52(Image.open(img1))
    # crop_52(img).save("1.png")

    req = requests.get(url2)
    img2 = BytesIO(req.content)
    img2 = crop_52(Image.open(img2))
    # crop_52(img).save("2.png")


    # img1 = Image.open("1.png")
    # img2 = Image.open("2.png")
    # img1.show()
    # img2.show()
    parseImg(img1,img2)
