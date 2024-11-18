import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        int a = -1, b = -1;
        Scanner scan = new Scanner(System.in);

        while (!(validate(a) && validate(b))) {
            a = scan.nextInt();
            b = scan.nextInt();
        }

        System.out.println(a * b);
    }

    public static boolean validate(int number) {
        return number >= 0 && number <= 10;
    }
}