
export default {
   search(params) {
     this.$http.get('/logistics',{params}).then(res => {
       console.log(res);
       this.count = res.data.count
       this.tableData = res.data.rows;
     })
   },
  transporSearch(data) {
     // this.$http.get('/logistics',{
     //   params:this.search_right.val?{code:this.search_right.val}:{}
     // }).then(res => {
     //    this.tableData = res.data
     // })
   },
}
