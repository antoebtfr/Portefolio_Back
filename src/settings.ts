export class Settings {
    private SERVER = '165.22.202.73';

    getServerLink(port?: number){

        return port ? this.SERVER + '/' + port : this.SERVER;
    }
}