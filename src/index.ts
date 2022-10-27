import "./main.css"
import {hello, owl} from './libs/components'
import forestPic from './images/the-dark-hedges-4094148_1920.jpg'
import * as _ from 'lodash'

console.log(_.VERSION)
document.body.appendChild(hello())
document.body.appendChild(owl())
document.body.style.backgroundImage=`url(${forestPic})`