#!/usr/bin/env python2

import os
import json
import sys

def is_photo(name):
  valid = name[-3:] == 'jpg'

  for section in ['reception', 'ceremony', 'hero', 'directions']:
    valid = valid and name.find(section) == -1

  return valid

with open(sys.argv[2], 'w') as f:
  f.write(json.dumps(['/images/{0}'.format(i)
                      for i in os.listdir(sys.argv[1]) if is_photo(i)]))
