import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        if (validate(n)) {
            System.out.println(factorial(n));
        }
    }

    public static boolean validate(int number) {
        return number >= 0 && number <= 12;
    }
    public static int factorial(int n) {
        if (n == 0 || n == 1) return 1;
        return n * factorial(n - 1);
    }
}