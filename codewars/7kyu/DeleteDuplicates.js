

function removeDuplicates(arr) {
    const newarr = [... new Set(arr)]
    return newarr
}

const arr =[1,2,2,3,3,5,6,7,7]
console.log(removeDuplicates(arr))