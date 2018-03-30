PatternLockMeasure.js
===========

### Algorithm
Youngbae Song, et al.  
**"On the Effectiveness of Pattern Lock Strength Meters: Measuring the Strength of Real World Pattern Locks"**  
Proceedings of *the 33rd Annual ACM Conference on Human Factors in Computing Systems*(2015)  
https://dl.acm.org/citation.cfm?id=2702365  

### Quick Learning
```html
<script src="plm.js"></script>
<script>
const plm = new PatternLockMeasure();

var secretPattern = '123654789'
/* This pattern on 3x3
│1│2│3│  ─ ─ ┐
│4│5│6│  ┌ ─ ┘
│7│8│9│  └ ─ →
*/

plm.getStrength(secretPattern); // -> 0.44
plm.getRank(secretPattern); // -> 1(Medium)

// change Threshold
plm.setThreshold([0.01, 0.02, 0.03]) // default[0.40, 0.56, 10.0]

plm.getStrength(secretPattern); // -> 0.44
plm.getRank(secretPattern); // -> 3(Very Strong)
</script>

```

### Demo
#### for Smartphone (16:9)
https://kinmemodoki.net/patternLockMeasure/demo.html  
with [patternLock.js](http://ignitersworld.com/lab/patternLock.html) and [jQueryUI](https://jqueryui.com/) 


### Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)


