
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if(tabMenu.length && tabContent.length){


tabContent[0].classList.add('ativo')//para deixar o primeiro item da pag ativo, para nao ficar em branco

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo')
  });
  tabContent[index].classList.add("ativo");//adicionando uma classe para quando eu apertar na foto do animal, vai para a descrição dele
}

tabMenu.forEach((itemMenu, index)=> {
  itemMenu.addEventListener('click', () => {
    activeTab(index);//ativando a função do que falei acima
  })
})
}