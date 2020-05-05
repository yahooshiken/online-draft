# coding: UTF-8
import csv


def join():
    # url
    csv_files = [
        ('giants', '読売ジャイアンツ'),
        ('baystars', '横浜DeNAベイスターズ'),
        ('tigers', '阪神タイガース'),
        ('carp', '広島東洋カープ'),
        ('dragons', '中日ドラゴンズ'),
        ('swallows', '東京ヤクルトスワローズ'),
        ('lions', '埼玉西部ライオンズ'),
        ('hawks', '福岡ソフトバンクホークス'),
        ('eagles', '東北楽天ゴールデンイーグルス'),
        ('marines', '千葉ロッテマリーンズ'),
        ('fighters', '北海道日本ハムファイターズ'),
        ('buffaloes', 'オリックス・バファローズ')
    ]
    with open('data/all_players.csv', 'w') as wf:
        writer = csv.writer(wf)
        writer.writerow(['team', 'number', 'name'])

        for file in csv_files:
            with open(f'data/{file[0]}.csv') as rf:
                reader = csv.reader(rf)
                for row in reader:
                    writer.writerow([file[1], row[1], row[2]])


if __name__ == "__main__":
    join()
