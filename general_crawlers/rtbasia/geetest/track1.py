import random
# 导入已记录的轨迹,{"距离":"轨迹"}格式
from .t_dict import T_dict
import re



# 格式化轨迹 [[x,y,t],...]
def format_track(track):
    track = re.findall('{(.*?)}', track)
    track_list = []
    for x in track:
        track_list.append([int(_) for _ in x.split(',')])
    return track_list


def choice_track_list(dist):
    # 因为滑动轨迹允许误差，所以如果符合 dist ± 2 in T_dict, 则返回符合的轨迹，并返回标记 1
    if str(dist) in T_dict:
        return T_dict[str(dist)], 1
    if str(dist - 1) in T_dict:
        return T_dict[str(dist - 1)], 1
    if str(dist + 1) in T_dict:
        return T_dict[str(dist + 1)], 1
    if str(dist - 2) in T_dict:
        return T_dict[str(dist - 2)], 1
    if str(dist + 2) in T_dict:
        return T_dict[str(dist + 2)], 1

    # 当匹配不到的时候，说明轨迹收集的不完善，需要在现有中裁剪轨迹
    s = f'{{{dist},'
    tmp_track_list = []
    for item in T_dict:
        # 如果存在符合待裁剪轨迹
        if f'{{{dist},' in T_dict[item] or f'{{{dist-1},' in T_dict[item] or f'{{{dist-2},' in T_dict[item] or f'{{{dist+1},' in T_dict[item] or f'{{{dist+2},' in T_dict[item]:
            # 格式化轨迹为列表
            for i in format_track(T_dict[item]):
                if dist in i or dist-1 in i or dist-2 in i or dist+1 in i or dist+2 in i:
                    tmp_track_list.append(i)
                    return tmp_track_list, 2
                else:
                    tmp_track_list.append(i)
    else:
        return None,None



def choice_track(dist):
    # 从样本中选择轨迹
    track, tag = choice_track_list(dist)

    # tag为1时，轨迹匹配成功，为2时，需要截取,为0时，匹配失败，放弃该验证
    if tag == 1:
        # 规范化轨迹数据  [[x,y,t],...]
        track_list = format_track(track)
        new_track_list = track_list
    elif tag == 2:
        new_track_list = track
    else:
        return
    
    return new_track_list



if __name__ == '__main__':
    # js_dict = pop_ImgLink()
    # coord = parseImg("https://static.geetest.com/" + js_dict["bg"],"https://static.geetest.com/" + js_dict["fullbg"])
    # print(f"坐标{coord}")

    # print(choice_track(66))
    aa = choice_track(205)
    print(aa)
    # print(len(aa))

