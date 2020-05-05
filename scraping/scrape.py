# coding: UTF-8
import csv
from urllib import request
from bs4 import BeautifulSoup


def scrape():
    # url
    urls = [
        ('giants', 'http://npb.jp/bis/teams/rst_g.html'),
        ('baystars', 'http://npb.jp/bis/teams/rst_db.html'),
        ('tigers', 'http://npb.jp/bis/teams/rst_t.html'),
        ('carp', 'http://npb.jp/bis/teams/rst_c.html'),
        ('dragons', 'http://npb.jp/bis/teams/rst_d.html'),
        ('swallows', 'http://npb.jp/bis/teams/rst_s.html'),
        ('lions', 'http://npb.jp/bis/teams/rst_l.html'),
        ('hawks', 'http://npb.jp/bis/teams/rst_h.html'),
        ('eagles', 'http://npb.jp/bis/teams/rst_e.html'),
        ('marines', 'http://npb.jp/bis/teams/rst_m.html'),
        ('fighters', 'http://npb.jp/bis/teams/rst_f.html'),
        ('buffaloes', 'http://npb.jp/bis/teams/rst_b.html')
    ]
    for u in urls:
        url = u[1]

        # get html
        html = request.urlopen(url)

        # set BueatifulSoup
        soup = BeautifulSoup(html, "html.parser")

        # get elements
        numbers = soup.select('tr.rosterPlayer > td:nth-child(1)')[1:]
        players = soup.select('tr.rosterPlayer > td.rosterRegister > a')

        # write data
        with open(f'data/{u[0]}.csv', 'w') as f:
            writer = csv.writer(f)
            for index, number in enumerate(numbers):
                writer.writerow([index, number.contents[0],
                                 players[index].contents[0]])


if __name__ == "__main__":
    scrape()
