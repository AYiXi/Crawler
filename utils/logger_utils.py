from loguru import logger
from pathlib import Path

logpath = Path(__file__).parent.parent / 'logs'

def get_logger(name, date_split=False):
    file_name = Path(name).name.split('.')[0]

    # 是否按日期分割存储日志文件
    if date_split:
        sink = '%s_{time:YYYY_MM_DD}.log' % (logpath / file_name)
    else:
        sink = '%s.log' % (logpath / file_name)

    logger.add(
        sink=sink,
        encoding='utf8',
        format="{time:YYYY-MM-DD HH:mm:ss} >>> {message} | func:{function} - {level}",
        rotation='50 MB'
    )

    return logger

if __name__ == '__main__':
    print(Path(__file__).name.split('.')[0])