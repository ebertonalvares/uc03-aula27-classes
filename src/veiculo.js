class Veiculo{
    marca;
    modelo;
    cor;
    ano;
    tamanho;
    peso;

    alterar_peso(peso){
        this.peso = peso;

    }
}
//Herança = carro(filho) herda de veiculo(pai)
class Carro extends Veiculo{
    volume_porta_malas;
}
//Herança = caminhao(filho) herda de veiculo(pai)
class Caminhao extends Veiculo{
    quilometragem_tacografo;
    capacidade_kg;


    zerar_tacografo(){
        this.zerar_tacografo = 0;
    }
}

module.exports ={Veiculo, Carro, Caminhao}
