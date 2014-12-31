#!/usr/bin/env python2

import os
import json

is_photo = lambda i: i[-3:] == 'jpg' and i not in ['reception.jpg', 'ceremony.jpg', 'hero_img.jpg']

with open('photos.json', 'w') as f:
    f.write(json.dumps(['../images/{0}'.format(i) for i in os.listdir('app/images') if is_photo(i)]))
