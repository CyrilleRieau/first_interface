export interface Fighter {
    attack(f : Fighter);
    defend(f : Fighter);
    heal(f : Fighter);    
}