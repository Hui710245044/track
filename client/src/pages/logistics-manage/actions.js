
export default {
   search(data) {
     this.$http.get('/logistics').then(res => {
       // console.log(res);
       this.tableData = res.data;
     })
   },
  transporSearch(data) {
     this.$http.get('/logistics',{
       params:this.search_right.val?{code:this.search_right.val}:{}
     }).then(res => {
        this.tableData = res.data
     })
   },
}
