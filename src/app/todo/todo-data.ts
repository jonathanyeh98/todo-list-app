/*
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { toDo } from './todo';

@Injectable({
    providedIn: 'root'
})

export class TodoData implements InMemoryDbService {

    createDb(): {todos: toDo[]} {
        const todos: toDo[] = [
            {
                id: 1,
                title: "Water the cat",
                description: "I need to go home to water my cat",
                priority: "high",
                completed: false
            },
            {
                id: 2,
                title: "Cool down the fridge",
                description: "Fridge is too warm, needs cooling",
                priority: "mid",
                completed: false
            },
            {
                id: 3,
                title: "Eat grandma",
                description: "Lets eat grandma",
                priority: "low",
                completed: false
            },
            {
                id: 4,
                title: "Feed the cactus",
                description: "Cactus may be hungry, must feed",
                priority: "high",
                completed: true
            },
            {
                id: 5,
                title: "Paint the paint",
                description: "add new coating to the paint",
                priority: "mid",
                completed: true
            },
            {
                id: 6,
                title: "Fire boss",
                description: "Its time to let the boss go",
                priority: "low",
                completed: true
            }
        ];
        return { todos }
    }

}
*/