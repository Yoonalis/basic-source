/**
 * @description: 图片懒加载：图片出现在窗口之后再补充src属性
 * @author: azureabaaba
 * @return {*}
 */
function lazyload() {
    const imgs = document.querySelectorAll('img');
    const len = imgs.length;
    const viewHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < len; i++) {
      const offsetHeight = imgs[i].offsetTop;
      if (offsetHeight < viewHeight + scrollHeight) {
        const src = imgs[i].dataset.src;
        imgs[i].src = src;
      }
    }
  }

window.addEventListener('scroll', lazyload);


/**
 * @description: 使用getBoundingClientRect()获取元素的大小及位置
 * @author: azureabaaba
 * @return {*}
 */
let imgList=[...document.querySelectorAll('img')];
let length=imgList.lengthconst;
function imgLazyLoad(){    
    let count=0    
    return (function () {        
        let deleteIndexList=[]        
        imgList.forEach((img,index)=>{            
            let rect=img.getBoundingClientRect()            
            if(rect.top<window.innerHeight){                
                img.src=img.dataset.src                
                deleteIndexList.push(index)                
                count++                
            if(count===length){                    
                document.removeEventListener('scroll',imgLazyLoad())                
            }            
          }        
        })        
     imgList=imgList.filter((img,index)=>!deleteIndexList.includes(index))    
    })()
}
document.addEventListener('scroll',imgLazyLoad)