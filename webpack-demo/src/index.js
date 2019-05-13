import _ from 'lodash'
import math from './math'

var ele = document.createElement('div')
ele.innerHTML = _.join(['gao', 'hang'], '-')
ele.style.color = 'red'
document.body.appendChild(ele)

console.log(math.add(4,4))