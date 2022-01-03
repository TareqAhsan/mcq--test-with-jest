
export interface Question {
    id: number,
    title: string,
    options: string[],
    ans: string[],
    lang: string
}

export const qList: Question[] =
    [
        {
            id: 1,
            title: 'ReactJs is a Free ___',
            options: ['Javascript library', 'Bootstrap library', 'css library', 'none of the above'],
            ans: ['Javascript library'],
            lang: "Java"
        },
        {
            id: 2,
            title: 'Which language we use in React',
            options: ['Java', 'Javascript', 'Typescript', 'python'],
            ans: ['Javascript', 'Typescript'],
            lang: "Java"
        },
        {
            id: 3,
            title: 'When React js was realease',
            options: ['May 29, 2013', 'April 29, 2013', 'June 29, 2013', 'May 29, 2014'],
            ans: ['May 29, 2013'],
            lang: "Java"
        },
        {
            id: 4,
            title: 'React had written in____',
            options: ['Javascript', 'python', 'java', 'php'],
            ans: ['Javascript'],
            lang: "Java"
        },
        {
            id: 5,
            title: 'What is babel',
            options: ['A Javascript transpiler', 'A Javascript interpreter', 'A Javascript compiler', 'none of the above'],
            ans: ['A Javascript compiler'],
            lang: "Java"
        },
        {
            id: 6,
            title: 'Which of the following is correct about typescript',
            options: ['Angular is based on typescript', 'This is superset of js', 'Typescript is maintained by microsoft', 'All of the above'],
            ans: ['All of the above'],
            lang: "NodeJS"
        },
        {
            id: 7,
            title: 'router is a part of which of the following module',
            options: ['@angular/core', 'router support', '@angular@router', 'none of the above'],
            ans: ['@angular/core', '@angular@router'],
            lang: "NodeJS"
        },
        {
            id: 8,
            title: 'What does Aot stand for',
            options: ['Ahead of time compilation', 'Angular Object template', 'both', 'none of the above'],
            ans: ['Ahead of time compilation'],
            lang: "NodeJS"
        },
        {
            id: 9,
            title: 'Observables helps you manage ___ data',
            options: ['asynchronous', 'synchronous', 'both', 'none of the above'],
            ans: ['asynchronous'],
            lang: "NodeJS"
        },
        {
            id: 10,
            title: 'Where would you put it',
            options: ['in the component', 'in the template', "In the Injectable decorator", "In the module"],
            ans: ["In the Injectable decorator"],
            lang: "NodeJS"
        },
    ]

   export const getQuestionByLang = (lang:string):Question[]=>{
       return qList.filter(q=>q.lang.toLocaleLowerCase()===lang.toLocaleLowerCase())
}