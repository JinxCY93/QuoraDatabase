import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Answer } from "./Answer";
import { User } from "./User";
import { Question_votes } from "./Question_votes";

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(type => Answer, answer => answer.question)
    answers: Answer[]

    @ManyToOne(type => User, user => user.questions)
    @JoinColumn({ name: "user_id" })
    user: User

    @OneToMany(type => Question_votes, questionvotes => questionvotes.questions)
    questionvotes: Question_votes[]
}
