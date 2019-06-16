import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Answer } from "./Answer";
import { Question } from "./Question";
import { Question_votes } from "./Question_votes";
import { Answer_votes } from "./Answer_votes";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("datetime")
    created_at;

    @OneToMany(type => Answer, answer => answer.user)
    answers: Answer[]

    @OneToMany(type => Question, question => question.user)
    questions: Question[]

    @OneToMany(type => Question_votes, questionvotes => questionvotes.users)
    questionvotes: Question_votes[]

    @OneToMany(type => Answer_votes, answer_votes => answer_votes.users)
    answervotes: Answer_votes[]
}
