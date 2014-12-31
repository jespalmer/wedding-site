#!/usr/bin/env python2

import os
import json

#is_photo = lambda i: i[-3:] == 'jpg' and i not in ['reception.jpg', 'ceremony.jpg', 'hero_img.jpg']


def is_photo(name):
  valid = name[-3:] == 'jpg'

  for section in ['reception', 'ceremony', 'hero']:
    valid = valid and name.find(section) == -1

  return valid

with open('app/photos.json', 'w') as f:
  f.write(json.dumps(['../images/{0}'.format(i)
                      for i in os.listdir('app/images') if is_photo(i)]))
