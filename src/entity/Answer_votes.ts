import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Answer } from "./Answer";
import { User } from "./User";

@Entity()
export class Answer_votes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote_value: number;

  @ManyToOne(type => Answer, answer => answer.answervotes)
  @JoinColumn({ name: "answer_id" })
  answers: Answer

  @ManyToOne(type => User, users => users.answervotes)
  @JoinColumn({ name: "user_id" })
  users: User
}
