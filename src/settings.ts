export class Settings {
    //private SERVER = '165.22.202.73'; old
    private SERVER = '64.225.97.45';

    getServerLink(port?: number){

        return port ? this.SERVER + '/' + port : this.SERVER;
    }
}