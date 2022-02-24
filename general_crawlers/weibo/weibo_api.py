import re
import requests


def get_uid():
    urls = [
        'https://weibo.com/ryuetsuya?',
        'https://weibo.com/u/1622008051',
    ]

    for url in urls:
        key = (
            re.findall(r'weibo.cn|om?/u/(\d+)', url) or
            re.findall(r'weibo.com/p/(\d+)', url) or
            re.findall(r'weibo.com/(.*)\?', url)
        )[0]

        if not key.isdigit() or not len(key) == 10:
            r = requests.get('https://weibo.com/ajax/profile/info?custom={}'.format(key), headers={
                'cookie': 'SUB=_2A25M9_b4DeRhGeNK41oQ8SbPzj2IHXVvhW8wrDV8PUNbmtB-LVPnkW9NSQdFEKG7EfTYFqWc5MOJKYCoj5diUNRY;',
            })
            key = r.json()['data']['user']['id']

        print(key, url)


if __name__ == '__main__':
    get_uid()
