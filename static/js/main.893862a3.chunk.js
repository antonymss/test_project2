(this.webpackJsonptestproject2=this.webpackJsonptestproject2||[]).push([[0],{24:function(e,t,n){e.exports={page404:"Page404_page404__wtW5W",goBack:"Page404_goBack__1F8-k",bigError:"Page404_bigError__3_fyx",ghostContainer:"Page404_ghostContainer__1eal9",ghostWithShadow:"Page404_ghostWithShadow__2Cfqa",ghost:"Page404_ghost__307-x","ghost-animation":"Page404_ghost-animation__3ZqoU",shadow:"Page404_shadow__2GnAy","shadow-animation":"Page404_shadow-animation__ctCZZ",errorTitle:"Page404_errorTitle__3Dy2Z",errorDescription:"Page404_errorDescription__2I5Zi"}},47:function(e,t,n){e.exports={login:"Login_login__2x-w8",notice:"Login_notice__ynOHx",loading:"Login_loading__sHZsx",error:"Login_error__3Tv24"}},65:function(e,t,n){e.exports={profile:"Profile_profile__eJ9D5",notice:"Profile_notice__1SDVo",loading:"Profile_loading__2Fyl1",error:"Profile_error__3MWy3"}},80:function(e,t,n){},81:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),i=n.n(c),o=(n(80),n(11)),s=(n(81),n(23)),u=n(67),E=n(47),j=n.n(E),R=n(27),g=n(12),h=n.n(g),b=n(18),l=function(e){return Object(b.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("auth-token",e);case 1:case"end":return t.stop()}}),t)})))()},p=function(){return Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("auth-token");case 1:case"end":return e.stop()}}),e)})))()},d=function(){return Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",localStorage.getItem("auth-token"));case 1:case"end":return e.stop()}}),e)})))()},O=function(e){return Object(b.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://tager.dev.ozitag.com/api/auth/user",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Accept:"application/json"},body:JSON.stringify(e)}));case 1:case"end":return t.stop()}}),t)})))()},f=function(){return Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:return t=e.sent,e.abrupt("return",fetch("https://tager.dev.ozitag.com/api/tager/user/profile",{method:"GET",headers:{Authorization:"Bearer "+t,Accept:"application/json"}}));case 4:case"end":return e.stop()}}),e)})))()},I=function(e){return Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:return t=e.sent,e.abrupt("return",fetch("https://tager.dev.ozitag.com/api/tager/user/profile/logout",{method:"POST",headers:{Authorization:"Bearer "+t,Accept:"application/json"}}));case 4:case"end":return e.stop()}}),e)})))()},A={isLoggedIn:!1,email:"",name:"",accessToken:null},x=function(e){return{type:"AUTH/LOG-OUT ",isLoggedIn:e}},m=function(){return function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t((a=r.data.email,c=r.data.name,{type:"AUTH/GET-USER-INFO",payload:{email:a,name:c,isLoggedIn:!0}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("cant get profile");case 13:case"end":return e.stop()}var a,c}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},v=n(122),U=n(120),Q=n(4),S=function(){var e=Object(R.b)(),t=Object(R.c)((function(e){return e.auth.isLoggedIn})),n=Object(u.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:""},onSubmit:function(t){var n;e((n=t,function(){var e=Object(b.a)(h.a.mark((function e(t){var r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.next=9,l(a.data.accessToken);case 9:t({type:"AUTH/SET-AUTH-TOKEN",token:a.data.accessToken}),t(m()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()))}});return t?Object(Q.jsx)(o.a,{to:"/"}):Object(Q.jsx)("div",{children:Object(Q.jsx)("form",{onSubmit:n.handleSubmit,children:Object(Q.jsxs)("div",{className:j.a.login,children:[Object(Q.jsx)(v.a,Object(s.a)({type:"email",label:"Email",margin:"normal",variant:"outlined"},n.getFieldProps("email"))),n.errors.email?Object(Q.jsx)("div",{className:j.a.error,children:n.errors.email}):null,Object(Q.jsx)(v.a,Object(s.a)({type:"password",label:"Password",margin:"normal",variant:"outlined"},n.getFieldProps("password"))),n.errors.password?Object(Q.jsx)("div",{className:j.a.error,children:n.errors.password}):null,Object(Q.jsx)(U.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})})},C=n(24),F=n.n(C),T=function(){var e=Object(o.g)();return Object(Q.jsxs)("div",{className:F.a.page404,children:[Object(Q.jsx)("h3",{className:F.a.goBack,children:Object(Q.jsx)("button",{onClick:function(){return e.goBack()},children:"\u23f4 Back"})}),Object(Q.jsx)("div",{className:F.a.bigError,children:"error"}),Object(Q.jsxs)("div",{className:F.a.ghostContainer,children:[Object(Q.jsxs)("div",{className:F.a.ghostWithShadow,children:[Object(Q.jsx)("img",{className:F.a.ghost,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAETCAYAAACGKMJ2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABuCSURBVHhe7Z35khRF14dz2EWQVUBAUEAQUHBDRCReUcMtwnAJvQDvwz++O+ECxC3UIAy3wBUXlE2UkVV2VJBFYFjfeZI+/ebkN0t3V1V3Lb8noqKrZ3p6sjLPL885uVR1Xbx48borMV1dXe769VJfokjMNXe555K7WjOTYTdeyosEIYZmmBs5aqQbPqyr9q7ESBCiYbqGu5EjR7jhvbootSgInYRoGIQxapQ8hRB96BomT5EFEmOxKX2i3QmyFmOjopM4W6P0Q7Kd5PTp0+7cuXP++Pfff11vXburV6+6K1eu1A/eX7582b/C8OEkfCP964gRI+oH78eMGeNuvvlmN27cODdr1iz/ebjW24K1gRORAhJFSuzfv78uAgTAK8Z+7do132Pbq/XeA72al+nvlWPYsGH1V8Qzbvx4d8stt7jxvUKZNGmSmzlzpv+8aB2JogXOnj3r/v777/px6tQp39MPJICsCIViBx5l8uTJ7tZbb60fiEc0jkQRgUFjXBg0BmccPnzYHTt27P+JwF77A2Mc39uTcxDyEPqEIREHn7FzsLAKLxOGWRzmgRAlB5/pDxOHHVOmTPHiwItMnTq19ikxEJUQRWzgjfLnn396MRw5csSHRghgIBHQO0+bNq0uAI6bbrrJG2jYm4OVhdfwHMy7hJ7GXvm/HLzn9cKFC/WcBZGcOHHCnTx50n82xESC8CZOnOhuv/12N3v2bDdhwoTaJ0RI5T0FRo7BGBi/CeGvv/7yPXR/QghDFHpfkmC+JxSBGXpWmDjslXL2tqcvN4LmiEVCucwzUXYEwkH5xQ0qLQoTBIZEWLRnzx539OjRergSCoEwB+OxECQUAa9ZC6BREIiJOBQJIj948GCfkItym0DwHHfddZcXStWppCgwFowDw2bUaN++fT5f4Gf8LgRjsd4U48GQ8iSCoTCRcCB0hMFx6NCh2iduwLUhfES/YMGCSo9iVSyn4FK7fO+JUSAGQgwLkQxyAxMCeYH1pmXAvCD5iAmEXMRA8IiDOsBzzJkzp/ab6lAtT3H9iuvetdvt6RUDI0h4hjBEmjdvnu8lyRdMCEXxCM1CR2ECIe/YvXu327t3b+23N3KPUaNG+bpAHNRNVaiMKOgNd+zY7o4d7Q2Teg3BxEDjIwQantEYekl+ViWoCzoIBhl+//13L5CwfqiTGTNmuHvuucd7kLJTelH09PT0imGHb+xLly7VwyR6QcTAwfAp78vqFRoF70EdMR9i4uA9EFZRR3QeiGP06NH+52Wk1KKgYREEjRyOutCoixYt8ok2vWDVxRCDOKgvcq9du3b5OjSoLyYhqUMEUkZKKYobodIOP6JET0cjA4kzjUmcTK8nhob6I+egPknKgU6E+iOkuvfee0s3jFs6Ufz6669u69atfUIlcgXEwEgKjVm1nCEp5BfU5x9//OHFQe4BFlItX77cLV682P+sDJRGFLj6zZs3+3kHi4MBMSxdutQ3XlmGVTsFI1XU7S+//NInpKJu586d6x566KFSzIyXQhTM1v7444++B6Ph4LbbbnP33XefQqUMsJBqy5YtfgUA0OHgkR988ME+ez2KSOFFQa+1bds2P8pkucOSJUu8S1eolB0WUhGq7ty50/+MXINRqWXLlnnvXFQKKwrCpR9++MHHuRYuMftMT4Url3doD9T9gQMHfOjKLDlQ9+RvK1asKGQ4VUhRECZ9++23fpTJkmnW6tAI7EJT7tBeCFnPnDnjOylCWSAJZ6Lv0Ucf9W1SJAonClZ8fv311+6ff/6pz7qSTDM0iOvWnENnIHQlhN2+fXs9CSd0Zf8GwijSsG2hREEv9NVXX7nz58/X84dHHnnEzZ8/X+FSTiCcYgn+pk2b/Hs6qbFjx7o1a9b4wY8iUBhRELd+8803PpcAZlZXrVrl8weFS/mCcIr2IsS1lQTkFrTXHXfc4d/nmUKIoru72w+54p6BZQa4ZHoeYleRP8j1GK6lI2OZDRDeMpexcOFC/z6v5F4UsSC4jcvq1av9ZnwNt+Ybcj52NJIDslQfiiCMXIuC2Wl6GhPE9OnTvSAYzVBCXQzI/RiZQhjHjx/3P0MYtCOhbx7JbVdrrjcUxNq1ayWIgkFb0Wa0HW0ItCkiseHbvJFLUbBF9IsvvugTMj322GN+ck6CKB60GW1HG9KWQNt++eWXfog9b+ROFOZqGXYFkmoqk/spiWJDG9KWtCnQxgyx26rbvJArUTDcahNzwLCrJdXyEMWHNqQtaVPaFmjrcKg9D+RKFN99951fumETczbsKkGUB9qSNqVtgbamzWn7vJAbUbDalQkfW7rBTDWjExp2LR+0KW1LGwNtTttjA3kgFxbHbSpZm2+L+2z/rybmygttazdBANoeG8jDiFTHRUEs+f3339eXf7Palb0QWrpRfmhj2truRogNEEZ1Or/ouChYbmyjDwzbrVy5Uov7KgRtTZvT9oAtsIKhk3RUFNxkgFlrS6yZ/tft4asHbU7bA7bA7UyxjU7RMVEwQffTTz/V91SzhZQVlBppqh60OW2PDQA2gW0wKtUJOiYKkirLIxiiu//++5VHVBjaHhuwPRfYBvu/O0FHRMGd++wuEMC+auURAhvAFgxsBFtpN20XBWte4uFXZjmFAGwhHqa1NXDtou2iYA+vbTohwWJIThN0wsAWsAkbcMFWsJl20lZrJHH67bff6qNN3B9IYZOIwSawDcBWsJl2Jt1tFQWJk+3Z5WbHRdivKzoDtoGNADbTzqS7baLgKTlhcs0tLTXaJAYC28BGDGwnfNJSlrRNFNxaMUyuucerEIOBjYRJt92eM2vaIgpubckGdiBe5MZlSq7FUGAj2IrlndgQtpQ1bbFMpuxtSTgrI8twu3bRHrAVe2ISNtSO5R+Zi4KlwDxRCFC+TeUL0Sg8EMYiC+4IkvXy8sxFwXCaeQkeumj7c4VoFB7Uie0AuQU2lSWZioJFf+GT/fESWvAnmgWbCSMMbArbyopMRYGibcSJh5NzB2ohWgHbsQfcY1NZ5haZiYLdU+yVMIgL5SVEq2A74cMm2dOd1Q69zETB0JntleDhHVOnTvXnQrQKNoQtAbaV1fBsZqJg95TBlL3mJURSsKFwaVBoY2mSiaWyz9Zupgt33nln7UyIZIS2hI1xR8m0yUQUxHuWYM+ePbu+KV2IpGBL2BRgY9ha2mQiijDBRtlKsEVaYEuht8gihEpdFNxF2h7Qwf1CtTxcpA02ZfeixdbSvnN56qI4ePBgfQabZylrebhIG2wK2wJsLe1RqNRFEe6ZsE0iQqRNaFu2ti4tUhUFO6TC6fcZM2bUzoRIl9C2sDm7XVIapCoK9tFa6MQGES0RF1mBbdlGNWwuzbVQqYoinJvg+WYadRJZgW3ZM/QgtL2kpCqKMJ9Q6CSyJrSxNPOK1ERBTBcOjYUqFiILQhsjfLI7xSQlNVFQKOUTop3EeUVa94ZK7eHy27Ztc5s3b/bnbAjhmQNF4MKFC27Xrl0+9Dt37pwfA+fWjcyaln1ImTklZoS5IQCrTtnhxg2OFy1aVJilOTzkxe7ywX1o7SZqSUjNU4SPfS3KZiL2+m7YsMHt2LHD9zKIgutgmQqPss3TwwnThmvjGrlWrplrpw6oC+okrw9+jwltzZ6qm5TURBGuVuQJ+3mHCty4caMvN7GohX7cppGFZmxg6e7urnu/MsE1cW1cI9dqtzGlDqgL6oS6ScvIsiS0tbNnz9bOkpGJpyiCKLhpL0ZhBtEfhBRse0x7bU0n4Vq4JtsA1h/UCXXT7hsbt0Joa6ENJiEVUVCBNqPIQq2xY8f687xCWcOVvINBz9mOG3C1C66l0VEa6ijNmeIswNZscSBlxRaTkooocLfW46LcvE/aUd7BesoYu7thGWjmWqijMCzOI9iaeQtsMI3ypiYKowihUzOCgGY/n2fKeO2hzeVGFEXLJ5r1ZGXaX97stRRhqU5oc2nkFam0NmP9xvjx42tn+aXZxxKX6THGZbz20OZCW2yVVEQRJmOW9OSZ0aNH15/y3wi2oaUMNHMt1BF1lXdCm0tjYCAVUYSjGUUQBSFBozOf3JWuTOu4uBa7095QUEdFCJ9Cm0sjB0pFFGFBiiAKwDhWr1496HZZetVHHnnEDR8+vPaT4sO1cE2DeQzqhLopSmcQ2lyjw82DkbqnKMqebBJOesznnnvOLVy40K/7AcqPMWA4GEYRwodm4Zq4Nq6Ra7U2ow6oC+qEuinKAENoc2mIIpUFgevXr69Psb/66quFSLYNxraJQ1nuwDIHwgWMgd6nKAJvFTw8RsR1Uw9cN56EJwcVIWwysD1sELA9bDAJlcwpQmh8ek5mRukpeX4GK0TLLgjgGrlWrplrpw6oiyIJAkKbU6ItRC+hzeUm0bZbZEKZklJRDEKbC22xVYqRSQnRRiQKISIkCiEiJAohIiQKISIkCiEiJAohIiQKISIkCiEiJAohIiQKISIkCiEiJAohIiQKISIkCiEiUtmOum7dutqZc6+//nrtrFzwHAduONzT01P7SbFgR929997rn7tRRtK0QYmiQd5++21/S0a7Z27RYIspd9J75ZVXaj8pF2naoMKnBimyICCtmw9XAYmiQbjDRdEpwzW0A4miQbhbXpHvAUXZ03geXBVQTtEg3LGE26cUOafAU5T1bitKtIWIUKItRIZIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFEJESBRCREgUQkRIFDWuXbvmenp6au+KzaVLl9yVK1dq70SzSBS97Nmzx73zzjvuvffec19//XXtp8UDYX/zzTf+OrieAwcO1H4jmqHyoqBX/e2339yZM2fcv//+64+icuLECbd//3537tw5f5TF87Wbyovir7/+cqdOnaq9c27MmDG1s+KBZzAhDBs2zI0aNcqfi+aovCgOHjzoLl++7M8xpBkzZvjzooEYjh8/Xnt3Q9yTJ0+uvRPNUGlR9GdI06dPr70rFn///bcPAY0pU6a48ePH196JZqi0KGJDmjp1qrvllltq74pF7PHmzJnjurq6/HvRHJUWxZEjR+qGNHz4cDdv3rxCGhKDBSTZxrhx49zMmTNr70SzVFYUjOOHhjRx4kR322231d4VC7wdo03G7bff7m6++ebaO9EslRXF+fPn3dmzZ2vvnE+wR48eXXtXLE6ePFkfdRo5cqSbPXu2QqcEVFYU9KyEHYAY7rjjjkSG9OOPP7p3333X/fLLL7WftI9//vnHXb9+3Z/j8W699VZ/3gqI66OPPnIffvhhH09aJSorCibpbCkEyfWkSZP8eSvwXcwRYJzd3d3eCzUCBrh161ZvgOvXr3dvvvmmF9Z3333X1CRiOFhA6IS3aJWjR496Mfz555/+WqpIZUWBARuMOiUxpEOHDnnPQ2+N0KzXHgg+s2XLFvf++++77du3ewMklOM7TFgbNmzwv2PpxmDg7UyEI0aM8NfSKvwvlrzYNVinUTUqKwozNkKmJJNcGOXu3bvr34e4MM6BwAN8/vnnbseOHV4IjH6FIjJj5Hfbtm1zX375ZT3MGwj7e2awk8xN4CGOHTtWe1fs2f0kVFYUBmP6Y8eOrb1rnj/++MMnusZNN9004PIK5kU+/fTTPkPBg4EYCMu++OKLeiI9GORGrQ4WIOpdu3b1ESD5SRWpvCjwFK0m2BgQhhSGGRhSf993+vRp99VXX3kBYYCI54EHHnAvv/yye+211/zB+cMPP+zzG/uOq1evusOHD7sffvih7o2yAC/B/zHwdlWdEa+8KDDoRhPjmL179/re38Dr9BeK0ctv2rTJLzwk1GEpybPPPuuWLFniJkyY4CfbODhftGiRe+aZZ7w4zOMghn379rmdO3f69wNx8eLFhjxQDN/PqFnojfA4RZ3dT0plRRH2guEq2Uah58dI6ckN8on+RrE2b97sY3UEwUzzf/7zHy8APh96Fc7pofEiCxcudI8//rg/B8T766+/+lW9IXyHhUwIIpx7aRTEzahTCJN/9r+rRmVFQR5Bzw4YWjMjLfSsJMHhUChgRPFMMiEJexz4G3730EMP+dehQjbEwQz7ihUr6iNjJOn06GEYxfdYTsQ1hAscGwFxM8oVexjEPdiAQZmprCjoqS08wVM0M1GFIDD0cNQIMPZwxAYjtbAEAd59991NjXTxN0wqMkMN/D+S9DCxB1bEGiwMbCQpBwvrEEYIQgu/s2pUVhQYsPXqJMyEJmEP3B/8/ueff/aG3p9nISQLPYBNggEJ+F133TWkh4hhoeLixYvrIRKGTLgTggGHAif/GIoLFy64jRs31sO6EMRodVNFKisKQhKWVxv0wHiAgcAYGT0ijxho3iDOJ+i17bOzZs1qedyfZRvWc5u3IKk2+B2eD8hxuI44RwhBqJ988on/TH8dAXVT5b0YlRUFPTahSRiP4wHY+B8useCc2WeWYhAyDSQIsBwF+D4bmSI2Z8Fhs17C4HvDHYGUKQx5MOIFCxbU/z+jaQiYvefm0TB+cicmAz/77DNftsE8Y3gtVaO6V94LvWu4GQeDZ5nDBx984NchcXDO7DNJdTjSNBQYnCWvaYz5U1YzVAw9HkbmOsxb4E1YMsKo19tvv+2v46233vLegdCKv41DJvE/Ki0KxLB06dI+M7dmcBgVB+cYd2hExPerVq3yI0mN9qhJe16EFX5H3Msz8rVs2bL6SBUgcryKXQt5RCxs1koxL6JNSf+j0qIAenAMnMmzoUBEjAQx8Ua4Qp4QLumIDbXVcKk/wu/iPF7Owc/mzp3r7rvvPp+cDwUi47NPPPGED81shMsYLLQqO5UXBcZEIvvUU08NuDmHn9GjYkBr1qypj+EjCF6NcOKMHtsmv/AyjQ6TDgR/b4bKd/cnYsTAjDiTgwOFa3xm/vz57vnnn3f33HOPH2XCAzEIEIZnYV5VNSovCsAYCKEw+BdffNF7jvvvv98fLLd44YUX6qLBeEw4GGcYroSTeXxm2rRp/pwwxoZmW4WhUxMFZRhoJIvyUE6M/rnnnvMhnl0L1/fSSy+5lStX+vmSsOx4HrsuQixCraoiUdTAIDA0xEFoRK7BQc+LAdHrx3kBf2OGBJZ/GKxxwpvgKRi5spGgZmGPBXs2DBLqOHwKwRswqoYomTC0a7nzzjv9eqZQAEZ4LZQ33G9SNSSKCAyDkMi8AOexAQ0EIU44ZMv8gc1d4CnYd9EsCIkVsjbahDAHCvNi+KxdB0cjuYZBYl5VJIoUQRBh2IEhshIWY2xkUq0/mGvgb2z0q123r0EUrXq2oiNRpIgN54awZ9pmzvkdk4PMdDcCs9bMm9gwKt6BJLkdSzDwevEiwaogUaQIxhuPMuElSHLJVejtGaHidv/ffvvtoMkswvn444/7xPbkNuQ4jYZzScDryVOIpiE8ihPeMKcwSG7ZG4FRIwzEQH7BjQu4QQG3x+E9B/kDs+gs0wiXYpDoMxI20KhTUvA+4fAy5ZQoRNPQY8ei6C/k4HN4CoRBOMV7DI65AFbSkjd8//33/uCcNUqETpZH8D8YRmU0KSsvgSAkihtIFAmx9UZAqNTfzjvAmPEYjz32mD9scg1PgJAIuzgwRBMDf8OkIXMk5CXxkHCaILxQ4Hikqi4flygSwhIJ5iIwWPZLxMslQjByjI35AibXnnzySb9S12aVDcIyvALiQRAIo5nh1FbAS7DTjzIiDpaA2Ix81ejqddOJl0uuW7eudubc66+/XjurBiTXtiQCgw/XQg2FeQm+A+8QeghEwndlLYYQ8iGuhf/LtbTzfyclTRuUp0gIhkNYxNGMIADDp1dm9hlvYXf14Jxeut1GSfnJffj/RRJE2kgUog94qaojUQgRIVEIESFRCBEhUQgRIVEIESFRCBEhUQgRIVEIESFRCBEhUQgRIVEIESFRCBEhUQgRIVEIESFRCBEhUQgRIVEIESFRCBEhUQgRIVEIESFRCBEhUQgRIVEIESFRCBEhUQgRIVEIESFRCBEhUQgRIVEIESFRCBEhUQgRkTtRnD592h04cMAdOXKk/oSgvKEyJifP5cvN4714bvTWrVt9BdljcnnSD89+W758uX/cbqdRGZOTVfnSfLzX8DfeeOP/aucts2XLltqZ8w9Sb5affvrJ/fzzz/7B6zwDjieEcnDOz/bv3+8fgTXQk0fbgcqYnCzLl9QGQzoePlFRO3furD83muetzZw50/ccwEMSeRj7pk2b3N69e/3P2o3KmJwi1KHRUU9hFUVPATxKd82aNf7Ru/PmzfOP4z1z5ow7f/68r7Rjx475ymxnT6cyJqcd5UvTU3RMFHFFzZ8/361evbr+VFCe68wTR3ku9fHjxzvSoCpjctpVvsKHT/1V1KpVq3wFxVAxa9eu9Q9Yh56enra4WJUxOUWow/5ouygGqqiRI0f69/3Bs6XbWWEqY3KKUIcD0VZRtFJRRrsqTGVMThHqcDDaJookFWVkXWEqY/IyFqEOh6ItokijooysKkxlTF7GItRhI2QuijQryki7wlTG5GUsQh02SqaiyKKijLQqTGVMXsYi1GEzZCaKLCvKSFphKuMNkpSxCHXYLJmIoh0VZbRaYSpjX1opYxHqsBVSn9FmXUu7KsoYNWqUmzVrljtx4kRDM6LtbEyjbGXMW/lYhm7kbpnHyZMn21pRRqMN2onGNMpSxjyWj1cjd6KwNfLtrChjqAbtZGMaRS/jvn37clm+kNyJAjpRUcZADcpGlu3bt3e0MY0il5H3eSxfSMcXBFoFGZ2sKMOSsilTpvj3JGXs9spDYxpFLWOey5cWiUXBcl9jwoQJHa8ogwpbuXJl7d2NBgWVsTniMkLey3fp0qXaWWskFgWJtbF06dJcVJQxffp0N2fOnNq7G6iMzUMZOYy81+GpU6dqZ62RWBTssYW5c+d6l5o3VqxY4SZOnOjPVcbWefTRR30Zi1CHZpOtkvhuHnv27PFjxOymGj16dO2n+YF5E3qO7u5un4CpjK1BGdkyOmbMmFzX4caNG93TTz/tR8paJbEo2GzOqEkeK8qgwkgQGbHIK0UpY1dXV+1d/jDhsr01STlTue+TEGUik7VPQhSZRKLIsysVolUSiYIYToiyIU8hRERiTyFvIcpG4kQbb1EEYaiMyalKB5hYFFAEYaiMySlKB5iUVEQBMrp0kDA6jXP/BU9TJBTuiVf6AAAAAElFTkSuQmCC",alt:"ghost"}),Object(Q.jsx)("img",{className:F.a.shadow,src:"data:image/png;base64,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",alt:"shadow"})]}),Object(Q.jsx)("h2",{className:F.a.errorTitle,children:"Page not found"}),Object(Q.jsxs)("h6",{className:F.a.errorDescription,children:[Object(Q.jsx)("p",{children:"The page you are looking for might have been removed, had its name changed, "}),Object(Q.jsx)("p",{children:"or is temporarily unavailable."})]})]})]})},w=n(119),B=n(121),k=n(123),N=n(65),J=n.n(N),K=function(){var e=Object(R.c)((function(e){return e.auth})),t=e.email,n=e.name,r=Object(R.c)((function(e){return e.auth.isLoggedIn})),a=Object(R.b)();return r?Object(Q.jsxs)("div",{className:J.a.profile,children:[Object(Q.jsxs)(w.a,{component:"nav",style:{width:"30%",margin:"0 auto"},"aria-label":"mailbox folders",children:[Object(Q.jsx)(B.a,{button:!0,children:Object(Q.jsx)(k.a,{primary:"Name: "+n,style:{textAlign:"center"}})}),Object(Q.jsx)(B.a,{button:!0,divider:!0,children:Object(Q.jsx)(k.a,{primary:"E-mail: "+t,style:{textAlign:"center"}})})]}),Object(Q.jsx)(U.a,{onClick:function(){a(function(){var e=Object(b.a)(h.a.mark((function e(t,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=n().auth.accessToken)){e.next=10;break}return e.prev=2,e.next=5,I(r).then((function(){t(x(!1)),p()}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),t(x(!1));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t,n){return e.apply(this,arguments)}}())},variant:"contained",color:"primary",children:"Log out"})]}):Object(Q.jsx)(o.a,{to:"/login"})};var z=function(){return Object(Q.jsx)("div",{className:"App",children:Object(Q.jsxs)(o.d,{children:[Object(Q.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(Q.jsx)(K,{})}}),Object(Q.jsx)(o.b,{path:"/login",render:function(){return Object(Q.jsx)(S,{})}}),Object(Q.jsx)(o.b,{path:"/404",render:function(){return Object(Q.jsx)(T,{})}}),Object(Q.jsx)(o.a,{from:"*",to:"/404"})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},V=n(33),H=n(66),G=n(48),Z=Object(G.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/GET-USER-INFO":return Object(s.a)(Object(s.a)({},e),t.payload);case"AUTH/SET-AUTH-TOKEN":return Object(s.a)(Object(s.a)({},e),{},{accessToken:t.token});case"AUTH/LOG-OUT ":return Object(s.a)(Object(s.a)({},e),{},{isLoggedIn:t.isLoggedIn});default:return e}}}),Y=Object(G.c)(Z,Object(G.a)(H.a));i.a.render(Object(Q.jsx)(a.a.StrictMode,{children:Object(Q.jsx)(R.a,{store:Y,children:Object(Q.jsx)(V.a,{children:Object(Q.jsx)(z,{})})})}),document.getElementById("root")),M()}},[[89,1,2]]]);
//# sourceMappingURL=main.893862a3.chunk.js.map