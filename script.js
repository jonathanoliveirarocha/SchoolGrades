var nameAge = []
var subjectsAlreadyAdded = []

function SaveNameAndAge(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    if(name==0 || age==0){
        alert("Porfavor preencha todos os campos!")
    }else{
        nameAge[0] = name
        nameAge[1] = age
        document.getElementById("showName").innerHTML += nameAge[0]
        document.getElementById("showAge").innerHTML += `${nameAge[1]} anos`
        document.getElementById("nameAndAge").style.display = "none"
        document.getElementById("addSubject").style.display = "block"
    }    
}   

function SaveSubject(){
    var subject = document.getElementById("subjects").value
    var firstBimester = document.getElementById("firstBimester").value
    var secondBimester = document.getElementById("secondBimester").value
    var thirdBimester = document.getElementById("thirdBimester").value
    var fourthBimester = document.getElementById("fourthBimester").value

    if(firstBimester==0 || secondBimester==0 || thirdBimester==0 || fourthBimester==0){
        alert("Por favor preencha todos os campos!")
    }else if(firstBimester>25 || secondBimester>25 || thirdBimester>25 || fourthBimester>25 || firstBimester<0 || secondBimester<0 || thirdBimester<0 || fourthBimester<0){
        alert("As notas devem ser entre 0 e 25!")
    }else{
        var isInList = false 
        for(x=0; x<=subjectsAlreadyAdded.length-1;x++){
            if(subjectsAlreadyAdded[x]==subject){
                isInList = true
            }
        }
        if(isInList){
            alert("Esta matéria já foi registrada!")
        }else{
            subjectsAlreadyAdded.push(subject)

            var testMax = Math.max(firstBimester, secondBimester, thirdBimester, fourthBimester)
            var totalGrade = parseInt(firstBimester) + parseInt(secondBimester) + parseInt(thirdBimester) + parseInt(fourthBimester)
            var maxGrade = ""
            var status = totalGrade >= 60?"Aprovado":"Reprovado"

            for(x=0;x<4;x++){
                if(testMax == firstBimester){
                    maxGrade = "Primeiro"
                }
                if(testMax == secondBimester){
                    maxGrade = "Segundo"
                }
                if(testMax == thirdBimester){
                    maxGrade = "Terceiro"
                }
                if(testMax == fourthBimester){
                    maxGrade = "Quarto"
                }
            }
            

            document.getElementById("showGrades").innerHTML += `<br><div class="subjects">
            <h2>${subject}</h2>
                <p>Nota total da matéria selecionada: ${totalGrade}</p>
                <p>Status: ${status}</p>
                <p>Bimestre com maior nota: ${maxGrade}</p>
            </div><br>`

            document.getElementById("addSubject").style.display = "none"
            document.getElementById("showGrades").style.display = "block"

                   
        }

    }   

}

function addMoreSubjects(){
    document.getElementById("addSubject").style.display = "block"
    document.getElementById("showGrades").style.display = "none"
}
