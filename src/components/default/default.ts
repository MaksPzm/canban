import { arrayTask } from "../type/type"

export const defaultValue: arrayTask = [
   {
        title: 'Backlog',
        Backlog: [
            {
                id: '1122',
                name: 'Sprint bugfix',
	            description: "Fix all the bugs"
            }
        ]
   },
   {
        title: 'Ready',
        Ready: [
            {
                id: '',
                name: '',
	            description: "Fix all the bugs"
            }
        ]
   },
   {
        title: 'In progress',
        Progress: [
            {
                id: '',
                name: '',
	            description: "Fix all the bugs"
            }
        ]
   },
   {
        title: 'Finished',
        Finished: [
            {
                id: '',
                name: '',
	            description: "Fix all the bugs"
            }
        ]
   },
]