安装项目
``` bash
$ npm install # Or yarn install
```

开启MongoDB服务器27017端口

```bash
$ mongod
```

运行项目
```
$ npm run dev
```
浏览器打开[localhost:3000](http://localhost:3000)

项目框架 express+nuxt

数据库   MongoDB（mongoose）+redis

后端目录
   api： 接口
   controller： 数据处理
        /carrier: 各平台查询接口
   model: 数据接口
   mongodb： 数据库操作方法
   redis: redis操作方法
   
核心思路：
                      
    前端导入excel表 --> 保存到MongoDB和   redis的list和hash中 --> 从list追踪号，找到对应的平台查询，查询到的信息保存到MongoDB中
    
    erp推送的跟踪号保存到list的中，查询后推回给erp系统。妥投后从list中删除
    
注意：
    
    1.查询追踪号时，出现被检测到频繁，则切换ip
    2.excel转json
    3.保存在hash中是为了保证查询的追踪号唯一，追踪号在hash中不存在，则插入到list中
    4.MongoDB是用的mongoose这个库
    
                     
