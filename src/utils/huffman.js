export class Huffman{
  frequency = (str) =>{
    var freqs = {};
    for (var i = 0; i < str.length;i++){
        if (str[i] in freqs){
            freqs[str[i]] ++;
        }
        else{
            freqs[str[i]] = 1;
        }
    }
    return freqs;
  }
  
  sortfreq = (freqs) =>{
    var letters = [];
    for (var ch in freqs){
        letters.push([freqs[ch],ch]);
    }
    return letters.sort();
  }
  
  buildtree = (letters) => {
    while(letters.length>1){
        var leasttwo = letters.slice(0,2);
        var therest = letters.slice(2,letters.length);
        var combfreq = letters[0][0] + letters[1][0];
        letters = therest;
        var two = [combfreq,leasttwo];
        letters.push(two);
        letters.sort();
  }
    return letters[0];
  }
  
  trimtree = (tree) => {
    let p = tree[1];
      if (typeof p === 'string')
        return p;
      else
        return (Array(this.trimtree(p[0]), this.trimtree(p[1])));
  }
  
  
  assigncodes = (node, pat, codes) =>{
      codes = codes || {};
      pat = pat || "";
      if(typeof(node) == typeof("")){
          codes[node] = pat;
      }
      else{
          this.assigncodes(node[0],pat+"0", codes);
          this.assigncodes(node[1],pat+"1", codes);
      }
      return codes;
  }
  
  dictionary = (string) => {
    let freq= this.frequency(string);
    let sort = this.sortfreq(freq);
    let tree = this.buildtree(sort);
    let dictionary = this.trimtree(tree);
    return dictionary;
  }
  
  encode = (str) => {
    let data = this.dictionary(str);
    let codes = this.assigncodes(data);
    var output = JSON.stringify(data) + "-----EndDictionary-----";
    for (var i=0;i<str.length;i++){
        output = output+codes[str[i]];
    }
    return output;
  }
  
  decode = (str) => {
    let data = str.split("-----EndDictionary-----");
    let tree = JSON.parse(data[0]);
    let text = data[1];
    var output="";
    var p = tree;
    for (var i=0;i<text.length;i++){
      if(text[i] == '0')
        p=p[0];
        else
          p=p[1];

      if (typeof p === 'string'){
        output = output +p;
        p=tree;
      }
    }
    return  output;
  }
}
