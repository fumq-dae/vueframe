let urls = class {
    //登录
    //获取token的url
    static token_url = `auth/oauth/token`;
    static ceshi="ceshi";
   
};
export const UrlProxy = new Proxy(urls, {

 
    get: (target, key, receiver) => {
        let url =' environment.serveUrl';

         let value = Reflect.get(target, key, receiver);
        // if (value.startsWith("http:")) {
        //     return value;
        // }
        return `${url}：${value}`.toLocaleLowerCase();
    }
});
