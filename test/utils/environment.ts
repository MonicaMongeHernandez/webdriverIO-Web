import jsonEnvironment from '../data/environmentData.json' assert { type: "json" };

  export default class Environment{  

  getEnv(){
    return process.env.Env;
  }

  getUrl() :string{
    return jsonEnvironment.urls[this.getEnv()];
  }  

  getPaths() :string{

    let specsPath:string = "";
    
    jsonEnvironment.paths.forEach(path => {
      if ((path.env).includes(this.getEnv())) {
        specsPath = path.path;
      }
    });
    return specsPath;
  }

}

